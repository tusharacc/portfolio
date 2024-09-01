<script>
  function openSocial(url) {
    return () => window.open(url, "_blank");
  }
</script>

<main>
  <div class="container">
    <header>
      <h1>Site Reliability Engineer</h1>
      <!-- Resume Download Button -->
      <a href="resume_tushar_saurabh.pdf" class="resume-btn" download>
        <i class="fas fa-download"></i> Download Resume
      </a>
    </header>
    <div class="content">
      <div class="photo">
        <img src="./images/tushar.png" alt="Profession Photo" />
      </div>
      <div class="tags">
        <section id="skills">
          <div class="skills-container">
            <!-- Problem Solving -->
            <div class="skill-card">
              <img
                src="./icons8-problem-solving-64.png"
                alt="Problem Solving Icon"
              />
              <div class="skill-title">Problem Solving</div>
              <div class="skill-description">
                Expert in analytical problem-solving techniques.
              </div>
            </div>

            <!-- Python -->
            <div class="skill-card">
              <img
                src="https://img.icons8.com/color/100/python.png"
                alt="Python Icon"
              />
              <div class="skill-title">Python</div>
              <div class="skill-description">
                Fluent in Python for data analysis, automation, and scripting.
              </div>
            </div>

            <!-- JavaScript -->
            <div class="skill-card">
              <img
                src="https://img.icons8.com/color/100/javascript.png"
                alt="JavaScript Icon"
              />
              <div class="skill-title">JavaScript</div>
              <div class="skill-description">
                Proficient in TypeScript and JavaScript for web development.
              </div>
            </div>

            <!-- Flask -->
            <div class="skill-card">
              <img
                src="https://img.icons8.com/color/100/flask.png"
                alt="Flask Icon"
              />
              <div class="skill-title">Flask</div>
              <div class="skill-description">
                Experience in building web apps with Flask.
              </div>
            </div>

            <!-- CI/CD -->
            <div class="skill-card">
              <img
                src="https://img.icons8.com/color/100/github.png"
                alt="CI/CD Icon"
              />
              <div class="skill-title">CI/CD</div>
              <div class="skill-description">
                Experienced with Git, GitHub, Jenkins, and Ansible for CI/CD
                pipelines.
              </div>
            </div>

            <!-- SQL Server -->
            <div class="skill-card">
              <img
                src="https://img.icons8.com/color/100/database.png"
                alt="SQL Icon"
              />
              <div class="skill-title">SQL & NoSQL</div>
              <div class="skill-description">
                Skilled in SQL Server, SQLite, and MongoDB.
              </div>
            </div>

            <!-- AppDynamics -->
            <div class="skill-card">
              <img
                src="https://img.icons8.com/ios/100/network.png"
                alt="Monitoring Icon"
              />
              <div class="skill-title">Monitoring</div>
              <div class="skill-description">
                Proficient with AppDynamics for monitoring applications.
              </div>
            </div>

            <div class="skill-card">
              <img src="./icons8-log-50.png" alt="Log Aggregation Icon" />
              <div class="skill-title">Log Aggregation</div>
              <div class="skill-description">
                Expertise in OpenSearch and ELK (Elasticsearch, Logstash,
                Kibana) for log aggregation and analysis.
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <div class="footer">
      <div class="social">
        <p
          on:click={openSocial(
            "https://www.linkedin.com/in/tushar-saurabh-49ba8a63/",
          )}
        >
          LinkedIn
        </p>
      </div>
      <div class="social">
        <p on:click={openSocial("https://www.github.com/tusharacc/")}>Github</p>
      </div>
      <div class="social">
        <p on:click={openSocial("https://leetcode.com/u/tusharacc/")}>
          Leetcode
        </p>
      </div>
      <div class="social">
        <p
          on:click={openSocial("https://www.hackerrank.com/profile/tusharacc")}
        >
          HackerRank
        </p>
      </div>
      <div class="social">
        <p
          on:click={openSocial(
            "https://stackoverflow.com/users/2607331/tushar-saurabh",
          )}
        >
          StackOverFlow
        </p>
      </div>
    </div>
  </div>
</main>

<style>
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f9;
    text-align: center;
  }

  /* Header Styles */
  header {
    background-color: #333;
    color: white;
    padding: 20px;
  }
  header h1 {
    font-size: 36px;
    margin: 0;
  }

  /* Download Resume Button */
  .resume-btn {
    display: inline-block;
    margin-top: 20px;
    padding: 12px 24px;
    font-size: 18px;
    color: white;
    background-color: #007bff;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition:
      background-color 0.3s ease,
      transform 0.3s ease,
      box-shadow 0.3s ease;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    text-decoration: none;
  }
  .resume-btn i {
    margin-right: 10px;
  }
  .resume-btn:hover {
    background-color: #0056b3;
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
  .resume-btn:active {
    transform: scale(1);
  }
  .content {
    display: flex;
    flex-direction: row;
    align-items: stretch; /* Ensure child containers stretch to fill the height */
    justify-content: center;
    padding: 20px;
  }

  .photo {
    flex: 1;
    margin: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    border-radius: 15px;
    background-color: #fff;
    position: relative;
  }
  .photo img {
    width: 100%;
    height: 100%;
    max-width: 400px;
    max-height: 100%;
    object-fit: cover;
    border-radius: 15px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    transition:
      transform 0.3s,
      box-shadow 0.3s;
  }
  .photo img:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }
  h1 {
    font-family: "Oswald", sans-serif;
    font-optical-sizing: auto;
    font-weight: bold;
    font-style: normal;
    color: brown;
  }
  .footer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1rem;
  }
  .social {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.2rem 0.5rem 0.2rem 0.5rem;
    border: 1px solid black;
    border-radius: 5px;
    margin: 1rem;
    cursor: pointer;
    background-color: bisque;
    color: brown;
    width: 10rem;
  }
  .skills-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 20px;
  }
  .skill-card {
    background: #ffffff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 250px;
    margin: 15px;
    padding: 20px;
    text-align: center;
    transition: transform 0.3s;
  }
  .skill-card:hover {
    transform: scale(1.05);
  }
  .skill-card img {
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
  }
  .skill-title {
    font-size: 18px;
    margin-bottom: 10px;
    font-weight: bold;
  }
  .skill-description {
    font-size: 14px;
    color: #666;
  }
  /* Add responsiveness */
  @media (max-width: 768px) {
    .skills-container {
      flex-direction: column;
      align-items: center;
    }
    header h1 {
      font-size: 28px;
    }
    .resume-btn {
      font-size: 16px;
      padding: 10px 20px;
    }
  }
</style>
