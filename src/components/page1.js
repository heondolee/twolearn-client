import React, { useEffect, useState, useCallback} from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Page1 = () => {
  return (
    <div>
      <h1>두런 두런 Page 1</h1>
      <Link to="/page2">Go to Page 2</Link>
    </div>
  );
};

export default Page1;