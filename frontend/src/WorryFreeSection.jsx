import { FaCheck } from "react-icons/fa";

const WorryFreeSection = () => {
  return (
    <div className="worryfree-container">
      <h2 className="worryfree-heading">
      Where <span className="bold">Dental Care </span> Meets <span className="bold">Peace of Mind</span>
      </h2>

      <div className="worryfree-grid">
        {/* Column 1 */}
        <div className="column">
          <h3 className="column-title">Peaceful Sedation</h3>
          <ul className="feature-list">
            <li><FaCheck className="icon" /> Affordable laughing gas with Nitrous oxide.</li>
            <li><FaCheck className="icon" /> Complete extensive treatment in one visit.</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="column">
          <h3 className="column-title">Peaceful Scheduling</h3>
          <ul className="feature-list">
            <li><FaCheck className="icon" /> Hours: 8:00 AM – 5:00 PM (Mon, Tue, Wed & Thu)</li>
            <li><FaCheck className="icon" /> Hours: Closed. (Fri, Sat & Sun)</li>
           <li><FaCheck className="icon" /> Same-day appointments & treatments.</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="column">
          <h3 className="column-title">Peaceful Financing</h3>
          <ul className="feature-list">
            <li><FaCheck className="icon" /> No insurance? We offer flexible plans.</li>
            <li><FaCheck className="icon" /> Affordable financing options available.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WorryFreeSection;
