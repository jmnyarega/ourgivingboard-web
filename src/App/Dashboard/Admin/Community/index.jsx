import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CommunityList from "./CommunityList";
import Dashboard from "../../index";
import { createComminuty } from "../../../../actions/communities/create";
import { getCommunities } from "../../../../actions/communities/get";
import { useCustomForm } from "../../../../hooks/forms";

const Community = () => {
  const dispatch = useDispatch();
  const { community } = useSelector((state) => state?.createComminuty);
  const [inputs, handleInputChange, handleSubmit] = useCustomForm(
    { name: "" },
    dispatch,
    createComminuty
  );

  useEffect(() => {
    dispatch(getCommunities());
  }, []);

  return (
    <Dashboard>
      <div className="admin-community">
        <h3 className="element-header title">Manage Communities</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name"> Name:
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter Name"
              value={inputs.name}
              onChange={handleInputChange}
            />
          </label>
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </form>
        <CommunityList communities={[community]} />
      </div>
    </Dashboard>
  );
};

export default Community;
