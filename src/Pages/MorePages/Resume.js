import React from 'react';
import { Row, Spin, Button, Icon } from 'antd';
import { Document, Page, pdfjs } from "react-pdf";
import 'react-pdf/dist/Page/AnnotationLayer.css';
import styles from './Resume.module.scss';
import resume from 'Assets/resume.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const FailedLoadResume = () => (
    <div className={styles.failed}>
        <div className={styles.inlineDiv}>
            <Icon type="frown" style={{ fontSize: 64, color: 'yellowgreen' }}/>
            <p>Failed to load resume. Please try again.</p>
        </div>
    </div>
);

const LoadingResume = () => (
    <div className={styles.loading}>
        <div className={styles.inlineDiv}>
            <Spin spinning size="large" tip="Loading Resume..." indicator={<Icon type="build" spin theme="twoTone" twoToneColor="yellowgreen"/>} />
        </div>
    </div>
);

class Resume extends React.PureComponent {
    handleLoadError = () => {

    }

    render() {
        return (
            <Row className={styles.resume}>
                <Row className={styles.myresume}>
                    <div className={styles.myresumeCont}>
                        <div className={styles.title}>Online Resume</div>
                        <div className={styles.btnCont}>
                            <Button type="primary" icon="file-pdf" className={styles.resumeBtn} size="large" onClick={() => window.location.href = "https://www.topcv.vn/xem-cv/bb537b17278599742a2835b5679bd7b6"}>
                                Download PDF Version
                            </Button>
                        </div>
                    </div>
                </Row>
                <Row className={styles.mainResume}>
                    <Row className={styles.resumeCont}>
                        <Document
                            file={resume}
                            error={<FailedLoadResume />}
                            loading={<LoadingResume />}
                            onLoadError={this.handleLoadError}
                        >
                            <Page pageNumber={1} className={styles.page} />
                        </Document>
                    </Row>
                </Row>
            </Row>
        )
    }
}

export default Resume;