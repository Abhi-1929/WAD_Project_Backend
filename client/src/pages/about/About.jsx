import "./about.css";

export default function About() {
  return (
    <>
      <div className="d-flex flex-row bd-highlight">
        <div className="p-2 flex-grow-1 bd-highlight">
          <div className="container m-4">
            <h2>Blogging Site</h2>
            <h6>
              Features of This Site.
              <ul>
                <li>Blog creaters can create there account on this site.</li>
                <li>
                  User can Share the Ideas, Knowledge, Experience with whole
                  world.
                </li>
                <li>All other users can freely access to the blogs.</li>
                <li>Connect with other User.</li>
                <li>Discover all the blogs on the Home Page.</li>
              </ul>
              <b>
                Created by:
                <ul>
                  <li> Suyog Patil</li>
                  <li> Pranay Mule</li>
                  <li> Abhishek Khairnar</li>
                  <li> Harshal Nahire</li>
                </ul>
              </b>
            </h6>
          </div>
        </div>
        <div className="p-2 pl-2">
          <div className="headerTitles bd-highlight">
            <span className="text-light headerTitleSm">React & Node</span>
            <span className="text-light headerTitleLg">About Us</span>
          </div>
          <img
            className="headerImg"
            src="https://images.unsplash.com/photo-1623186786193-1294c5348b12?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=720&ixid=MnwxfDB8MXxyYW5kb218MHx8YWJvdXR8fHx8fHwxNjUxOTMwNzIw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600"
            alt="About"
          />
        </div>
      </div>
    </>
  );
}
