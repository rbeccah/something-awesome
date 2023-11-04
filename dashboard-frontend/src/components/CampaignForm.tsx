import React, { ChangeEvent, FormEvent, useState } from 'react';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

interface FormData {
  campaignName: string;
  emailingList: string; // Will be a CSV string
  campaignType: string;
  dateTime: string;
}

const CampaignForm = () => {
  const [formData, setFormData] = useState<FormData>({
    campaignName: '',
    emailingList: '', // Will be a CSV string
    campaignType: '',
    dateTime: '',
  });

  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement | HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFormData((prevData) => ({
          ...prevData,
          emailingList: event.target?.result as string,
        }));
      };
      reader.readAsText(file);
    }
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      // Send the form data as JSON to the backend
      const response = await fetch(`http://127.0.0.1:3000/submit-campaign`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setIsSnackbarOpen(true);
        console.log(isSnackbarOpen)
        console.log('Form submitted successfully');
      }
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  const handleSnackbarClose = () => {
    setIsSnackbarOpen(false);
  };

  return (
    <div>
      {/* <!-- Contact Form --> */}
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            New Campaign
          </h3>
        </div>
        <form onSubmit={handleFormSubmit}>
          <div className="p-6.5">
            <div className="mb-4.5">
              <label className="mb-2.5 block text-black dark:text-white">
                Campaign Name <span className="text-meta-1">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter the name of your phishing campaign"
                id="campaignName"
                onChange={handleInputChange}
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                required
              />
            </div>

            <div className="mb-4.5">
              <label className="mb-2.5 block text-black dark:text-white">
                Emailing List (as CSV file)
              </label>
              <input 
                type="file" 
                name="csvFile" 
                accept=".csv"
                id="emailingList"
                onChange={handleFileChange}
                required
              /> 
            </div>

            <div className="mb-4.5">
              <label className="mb-2.5 block text-black dark:text-white">
                Campaign Type
              </label>
              <div className="relative z-20 bg-transparent dark:bg-form-input">
                <select 
                  id="campaignType"
                  className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  onChange={handleSelectChange}
                >
                  <option value="default">Select Campaign Type</option>
                  <option value="1Password Change Password">1Password Change Password</option>
                  <option value="Gmail Block Login Email">Gmail Block Login Email</option>
                  <option value="CommBank Unread Message">CommBank Unread Message</option>
                  <option value="Fake Job Opportunity">Fake Job Opportunity</option>
                </select>
                <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
                  <svg
                    className="fill-current"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.8">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                        fill=""
                      ></path>
                    </g>
                  </svg>
                </span>
              </div>
            </div>

            <div className="mb-6">
              <label className="mb-2.5 block text-black dark:text-white">
                Schedule Send
              </label>
              <input
                type="datetime-local"
                id="dateTime"
                name="schedule-day-time"
                onChange={handleInputChange}
                required
              />
            </div>

            <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
              Send Campaign
            </button>

            {/* Snackbar for successful submission */}
            <div className="py-3 px-6">
              <Snackbar open={isSnackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
                <MuiAlert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
                  Form submitted successfully
                </MuiAlert>
              </Snackbar>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CampaignForm;