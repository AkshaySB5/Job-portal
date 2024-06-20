import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Mainlayout from "./layout/Mainlayout";
import Jobspage from "./pages/Jobspage";
import Notfound from "./pages/Notfound";
import Jobpage from "./pages/Jobpage";
import Addjob from "./pages/Addjob";
import Editjob from "./pages/Editjob";

const App = () => {
  const addJob = async (newJob) => {
    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });
    return res;
  };

  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });
    return res;
  };
 const updatedJobSubmit = async (job) => {
   const res = await fetch(`/api/jobs/${job.id}`, {
     method: "PUT",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(job),
   });
   return;
 };




  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Mainlayout />}>
        <Route index element={<Homepage />} />
        <Route path="jobs" element={<Jobspage />} />
        <Route path="jobs/:id" element={<Jobpage deleteJob={deleteJob} />} />
        <Route path="*" element={<Notfound />} />
        <Route path="edit-job/:id" element={<Editjob updatedJobSubmit={updatedJobSubmit} />} />
        <Route path="add-job" element={<Addjob addJobSubmit={addJob} />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
