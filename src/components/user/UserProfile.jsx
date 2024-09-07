import React from "react";
import "./userProfile.scss";
import img from "../../assets/bg.jpg";

const UserProfile = () => {
  return (
    <div className="user-profile">
      <div className="profile-left-side">
        <div className="profile-card">
          <img src={img} alt="" />
          <h3> JOhn Doe</h3>
          <h4> Full Stack Engineer</h4>
          <h4> Bay 4 San Adreas GTA 5</h4>

          <div className="btns">
            <button> Follow</button>
            <button>Message</button>
          </div>

          <div className="profile-links">
            <span> Github : </span>
            <hr></hr>
            <span> LinkedIn : </span>
            <hr></hr>
            <span> Instagram : </span>
            <hr></hr>
            <span> Facebook : </span>
            <hr></hr>

            <div>
              <button> Edit Links</button>
            </div>
          </div>
        </div>
      </div>

      <div className="profile-right-side">
        <div className="progress-details">
          <div className="progress-details-left">progress-details-left</div>

          <div className="progress-details-right">progress-details-right</div>
        </div>

        <div className="class-details">
          <div className="detail-list">
            <h1>Class details</h1>

            <div className="heading">
              <span className="first">Class Name</span>
              <span> Status </span>
              <span>Action</span>
            </div>
              <hr></hr>


            <div className="single-entry">
              <span>
                React Native ,Trainer : Naveed khan , Mobile app developer BQE
              </span>
              <span> Active </span>
              <button>Enter</button>
            </div>
            <hr></hr>



            <div className="single-entry">
              <span>
                React Native ,Trainer : Naveed khan , Mobile app developer BQE
              </span>
              <span> Completed </span>
              <button>Disable</button>
            </div>
            <hr></hr>

          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
