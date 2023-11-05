import AdobeLogo from "../images/brand/adobe.png";
import FacebookLogo from '../images/brand/facebook.svg'
import GoogleLogo from '../images/brand/google.svg';
import GoogleDriveLogo from '../images/brand/google-drive.png';
import InstagramLogo from '../images/brand/instagram.png';
import MicrosoftLogo from '../images/brand/microsoft.png';

import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const TableOne = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Email Templates and Corresponding Websites
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-4">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Template Type
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Corresponding Phishing Website
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Number of Email Views
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Successful Phish
            </h5>
          </div>
        </div>

        <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-4">
          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            <div className="flex-shrink-0">
              <img src={AdobeLogo} alt="1PasswordLogo" className="w-13"/>
            </div>
            <Link to="https://rbeccah.github.io/email_templates/adobe.html" target="_blank">
              <p className="hidden text-black dark:text-white hover:underline sm:block">Adobe Change Password</p>
            </Link>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <Link to="https://rbeccah.github.io/website_templates/Adobe/login.html" target="_blank">
              <p className="hidden text-black dark:text-white hover:underline sm:block">Adobe Login Page</p>
            </Link>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="text-black dark:text-white">590</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="text-meta-1">201</p>
          </div>
        </div>

        <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-4">
          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            <div className="flex-shrink-0">
              <img src={FacebookLogo} alt="Brand" />
            </div>
            <Link to="https://rbeccah.github.io/email_templates/facebook.html" target="_blank">
              <p className="hidden text-black dark:text-white hover:underline sm:block">Facebook Login Verification</p>
            </Link>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <Link to="https://rbeccah.github.io/website_templates/Facebook/login.html" target="_blank">
              <p className="hidden text-black dark:text-white hover:underline sm:block">Facebook Login Page</p>
            </Link>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="text-black dark:text-white">467</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="text-meta-1">311</p>
          </div>
        </div>

        <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-4">
          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            <div className="flex-shrink-0">
              <img src={GoogleDriveLogo} alt="Brand" className="w-12"/>
            </div>
            <Link to="https://rbeccah.github.io/email_templates/google_drive.html" target="_blank">
              <p className="hidden text-black dark:text-white hover:underline sm:block">Google Drive Shared Folder</p>
            </Link>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <Link to="https://rbeccah.github.io/website_templates/Google/login.html" target="_blank">
              <p className="hidden text-black dark:text-white hover:underline sm:block">Google Login Page</p>
            </Link>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="text-black dark:text-white">420</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="text-meta-1">64</p>
          </div>
        </div>

        <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-4">
          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            <div className="flex-shrink-0">
              <img src={GoogleLogo} alt="Brand" className="w-12"/>
            </div>
            <Link to="https://rbeccah.github.io/email_templates/google_account.html" target="_blank">
              <p className="hidden text-black dark:text-white hover:underline sm:block">Google Sign-In Attempt</p>
            </Link>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <Link to="https://rbeccah.github.io/website_templates/Google/login.html" target="_blank">
              <p className="hidden text-black dark:text-white hover:underline sm:block">Google Login Page</p>
            </Link>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="text-black dark:text-white">389</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="text-meta-1">132</p>
          </div>
        </div>

        <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-4">
          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            <div className="flex-shrink-0">
              <img src={InstagramLogo} alt="Brand" className="w-12"/>
            </div>
            <Link to="https://rbeccah.github.io/email_templates/instagram.html" target="_blank">
              <p className="hidden text-black dark:text-white hover:underline sm:block">Instagram Suspicious Login</p>
            </Link>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <Link to="https://rbeccah.github.io/website_templates/Instagram/login.html" target="_blank">
              <p className="hidden text-black dark:text-white hover:underline sm:block">Instagram Login Page</p>
            </Link>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="text-black dark:text-white">389</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="text-meta-1">132</p>
          </div>
        </div>

        <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-4">
          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            <div className="flex-shrink-0">
              <img src={MicrosoftLogo} alt="Brand" className="w-12"/>
            </div>
            <Link to="https://rbeccah.github.io/email_templates/office563.html" target="_blank">
              <p className="hidden text-black dark:text-white hover:underline sm:block">Office 365 Password Request</p>
            </Link>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <Link to="https://rbeccah.github.io/website_templates/Microsoft/login.html" target="_blank">
              <p className="hidden text-black dark:text-white hover:underline sm:block">Microsoft Login Page</p>
            </Link>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="text-black dark:text-white">389</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="text-meta-1">132</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableOne;
