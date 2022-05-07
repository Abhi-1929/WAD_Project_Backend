import "./about.css";

export default function About() {
  return (
    <>
      <div className="d-flex flex-row bd-highlight">
        <div className="p-2 flex-grow-1 bd-highlight">
          <h2>Blogging Site</h2>
          <h6>
            Features of This Site.
            <ul>
              <li>User can Create this account</li>
              <li>
                User can Share the Ideas, Knowledge, Experience with whole
                world.
              </li>
              <li>Connect with other User.</li>
            </ul>
          </h6>
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
