import { Stack } from "@mui/material"; //like grid system in Bootstrap: use to align hor or ver
import { Link } from "react-router-dom"; //to use links similar href tags 

import { logo } from "../utils/constants";
import {SearchBar} from "./";

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;