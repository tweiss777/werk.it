import logo from '../../assets/img/logo.svg';

import React, { useContext, useEffect, useState } from 'react';
import TextInput from '../../components/UI/inputs/TextInput';
import Form from '../../components/UI/wrappers/Form';
import * as yup from 'yup';
import './Popup.css';
import Button from '../../components/UI/buttons/Button';
import { api, AuthContext } from '../../components/context/AuthContext';


const wishlistApi = `${api}/jobs/wishlist`;

const loginSchema = yup.object({
  loginEmail: yup.string().email('Email not valid').required('Required'),
  loginPassword: yup.string().required('Required'),
});

const wishlistSchema = yup.object({
  company_name: yup.string().required('Required'),
  position: yup.string().required('Required'),
});

const Popup = () => {
  const { login, logout, user, axiosJWT } = useContext(AuthContext);

  const [jobData, setJobData] = useState({});
  const [loading, setLoading] = useState(false);

  const setError = (error) => console.log(error);

  const postWishlistJob = async (data) => {
    if (loading) return;
    setLoading(true);
    try {
      const newJob = {
        ...data,
        added_by: user.id,
        jobPhase: 'WISHLIST',
        jobStatus: 'INACTIVE',
        handedCv: false,
        handedAsgmt: false,
        handedCover: false,
        notes: "Let's make a lot of money",
      };
      console.log(newJob)
      const res = await axiosJWT.post(`${wishlistApi}`, newJob);
      console.log(res);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  const handleLogin = async (data) => {
    const { loginEmail: email, loginPassword: password } = data;
    await login({ email, password });
  };

  const handleLogOut = async (data) => {
    logout();
  };

  const handleWishlist = async (data) => {
    await postWishlistJob(data);
    // handleClosePopup();
  };

  const handleClosePopup = () => {
    window.close();
  };

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { action: 'get' },
        function (response) {
          setJobData(response.got);
        }
      );
    });
  }, []);

  // Not Logged in
  if (!user)
    return (
      <div className="p-5 flex flex-col gap-3 bg-gradient-to-b from-[#F2ECF9] to-[#F4F0E9]">
        <img src={logo} alt="logo" className="w-32" />
        <Form className="Login" onSubmit={handleLogin} schema={loginSchema}>
          <div className="flex flex-col p-2 gap-4">
            <TextInput
              label="Email"
              placeHolder="email@example.com"
              name="loginEmail"
              autoComplete="email"
              required
            />
            <TextInput
              label="Password"
              name="loginPassword"
              type="password"
              autoComplete="current-password"
              placeHolder="********"
              required
            />
          </div>
          <div className="flex gap-2 justify-center">
            <Button onClick={handleClosePopup} secondary>
              Cancel
            </Button>
            <Button type="submit">Submit</Button>
          </div>
        </Form>
      </div>
    );

  // Logged in
  return (
    <div className="p-5 flex flex-col gap-3 bg-gradient-to-b from-[#F2ECF9] to-[#F4F0E9]">
      <div className="flex justify-between">
        <img src={logo} alt="logo" className="w-36" />
        <Button className="" secondary onClick={handleLogOut}>
          Logout
        </Button>
      </div>
      <Form
        className="PostJob"
        onSubmit={handleWishlist}
        schema={wishlistSchema}
      >
        <div className="flex mb-1">
          <Button type="submit" className="grow">
            Save to Wishlist
          </Button>
        </div>
        <TextInput
          label="Company"
          placeHolder="Company name"
          name="company_name"
          value={jobData?.companyName}
          required
        />
        <TextInput
          label="Job Title"
          placeHolder="Job Position"
          name="position"
          value={jobData?.position}
          required
        />
        <TextInput
          label="Location"
          placeHolder="Location"
          name="location"
          value={jobData?.location}
          required
        />
        <TextInput
          label="Post Url"
          placeHolder="Post Url"
          name="job_source"
          value={jobData?.source}
          required
        />
        <TextInput
          label="Description"
          placeHolder="Job Position"
          name="job_desc"
          rows="3"
          value={jobData?.description}
          required
        />
      </Form>
    </div>
  );
};

export default Popup;
