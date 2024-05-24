import Profile from "./Views/profile-image.jsx";
import Info from "./Views/info.jsx";
import { About, Exp, Proj, Educ } from "./Contents/Constants.jsx";
import "./main.css";
import Logos from "./Components/logolist.js";
import Icontact from "./Contents/contact.jsx";

export default function Buildpage() {
  return (
    <div className="card" id="sizepage">
      <div className="row">
        <Info
          body={
            <>
              <Profile />
              <br />
              <br />
              <h1>Contact</h1>
              <hr />
              <Icontact />
              <br />
              <h1>{About.title}</h1>
              <hr />
              <h5 className=" fw-light ">{About.detail}</h5>
              <br />
              <h1>Skills</h1>
              <Logos />
            </>
          }
        />
        <Info
          body={
            <>
              <br />
              <section>
                <h1>{Exp.title}</h1>
                <hr />

                <div className="row">
                  <div className="col">
                    <h4>{Exp.place}</h4>
                    <h4>{Exp.position}</h4>
                  </div>
                  <div className="col">
                    {Exp.dateBegin} - {Exp.dateEnd}
                  </div>
                </div>
                <h5 className=" fw-light ">{Exp.jobDetail}</h5>
                
              </section>

              <br />
              <section>
                <h1>{Proj.title}</h1>
                <hr />

                <div className="row">
                  <div className="col">
                    <h4>{Proj.namePro}</h4>
                    <h4>{Proj.nameApp}</h4>
                  </div>
                  <div className="col">
                    {Proj.dateBegin} - {Proj.dateEnd}
                  </div>
                </div>
                <h5 className=" fw-light ">
                {Proj.appDetail}
                </h5>
                
              </section>

              <br />
              <section>
                <h1>{Educ.title}</h1>
                <hr />

                <div className="row">
                  <div className="col">
                    <h4>{Educ.major}</h4>
                    <h4>{Educ.school}</h4>
                    <h4>GPX: {Educ.gpx}</h4>
                  </div>
                  <div className="col">
                    {Educ.dateBegin} - {Educ.dateEnd}
                  </div>
                </div>
              </section>
            </>
          }
        />
      </div>
    </div>
  );
}
