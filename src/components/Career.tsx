import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Graduate Trainee | CRM Analytics & Revenue Operations</h4>
                <h5>Jaro Education</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Engineered a CRM lead analytics pipeline in LeadSquared across 3 EdTech verticals — applied data cleaning, segmented 100+ weekly leads by program fit 
              and budget tier; diagnosed revenue conversion bottlenecks via root cause analysis to drive stakeholder-aligned outreach prioritization.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Google Student Ambassador</h4>
                <h5>Google India</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Ranked Top 250 nationally among 10,000+ ambassadors — grew community to 500+ members; led 10+ workshops and 3 cross-campus events (200+ 
              participants each) driving AI & data literacy adoption.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
