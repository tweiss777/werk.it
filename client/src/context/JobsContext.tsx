import React from "react";
import { IJobsContext,JobsContextDefaults } from "../Interfaces/IJobsContext";

const JobsContext = React.createContext<IJobsContext>(JobsContextDefaults);

export default JobsContext;
