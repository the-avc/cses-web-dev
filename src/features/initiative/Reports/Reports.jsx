import styles from "./Reports.module.scss";
import { handleDownloadReport } from "../../../utils/helper.js";

const Reports = ({ name, reports }) => {

    return (
        <div className={styles.allReport}>
            {reports.map((report, index) => (
                <div key={index} className={styles.reportWrapper}>
                    <div className={styles.text}>
                        <span className={styles.header}>{`${name} '${report.year}`}</span>
                        <p className={styles.venue}>{report.venue ? `Conducted at ${report.venue}` : null}</p>
                    </div>

                    <button
                        className={styles.downloadButton}
                        onClick={() => handleDownloadReport(`${name}_${report.year}`, report.url)}
                    >
                        Download Report
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Reports;
