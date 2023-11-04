import Breadcrumb from '../components/Breadcrumb';
import TableOne from '../components/TableOne';

const WebsiteLibrary = () => {
  return (
    <>
      <Breadcrumb pageName="Phishing Websites Library" />

      <div className="flex flex-col gap-10">
        <TableOne />
      </div>
    </>
  );
};

export default WebsiteLibrary;
