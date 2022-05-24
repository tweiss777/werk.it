import React from 'react';
import logo from '../../assets/img/logo.svg';
import TextInput from '../../components/UI/inputs/TextInput';
import Form from '../../components/UI/wrappers/Form';
import * as yup from 'yup';
import './Popup.css';
import Button from '../../components/UI/buttons/Button';

const schema = yup.object({
  company_name: yup.string().required('Required'),
  position: yup.string().required('Required'),
});

const Popup = () => {
  const onSubmit = async (data) => {
    // await postJob(data);
  };

  const handleClosePopup = () => {
    // handle close
  };
  return (
    <div className="p-5 flex flex-col gap-3 bg-gradient-to-b from-[#F2ECF9] to-[#F4F0E9]">
      <img src={logo} alt="logo" className="w-32" />
      <Form className="PostJob" onSubmit={onSubmit} schema={schema}>
        <div className="flex mb-1">
          <Button type="submit" className="grow">
            Save to Wishlist
          </Button>
        </div>
        <TextInput
          label="Company"
          placeHolder="Company name"
          name="company_name"
          required
        />
        <TextInput
          label="Job Title"
          placeHolder="Job Position"
          name="position"
          required
        />
        <TextInput
          label="Location"
          placeHolder="Location"
          name="location"
          required
        />
        <TextInput
          label="Post Url"
          placeHolder="Job Position"
          name="job_source"
          required
        />
        <TextInput
          label="Description"
          placeHolder="Job Position"
          name="job_desc"
          rows="3"
          required
        />
      </Form>
    </div>
  );
};

export default Popup;
