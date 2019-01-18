import React from 'react';
import ReactDocumentTitle from 'react-document-title';
import { formatMessage } from 'umi-plugin-react/locale';

import styles from './index.less';

export default () => (
  <ReactDocumentTitle title={formatMessage({ id: 'page.index.title' })}>
    <div className={styles.main}>Index</div>
  </ReactDocumentTitle>
);
