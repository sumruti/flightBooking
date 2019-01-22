import React, { Component, Suspense } from 'react';
import { connect } from 'dva';
import { Row, Col, Icon, Card , Menu, Dropdown , Tooltip } from 'antd';
import { formatMessage, FormattedMessage } from 'umi/locale';


import GridContent from '@/components/PageHeaderWrapper/GridContent';
import { getTimeDistance } from '@/utils/utils';

import styles from './Analysis.less';
import NumberInfo from '@/components/NumberInfo';
import numeral from 'numeral';
import CountDown from '@/components/CountDown';
import ActiveChart from '@/components/ActiveChart';

import PageLoading from '@/components/PageLoading';

const IntroduceRow = React.lazy(() => import('./IntroduceRow'));
const SalesCard = React.lazy(() => import('./SalesCard'));
const TopSearch = React.lazy(() => import('./TopSearch'));
const ProportionSales = React.lazy(() => import('./ProportionSales'));
const OfflineData = React.lazy(() => import('./OfflineData'));
const targetTime = new Date().getTime() + 3900000;


@connect(({ chart, loading }) => ({
  chart,
  loading: loading.effects['chart/fetch'],
}))
class Analysis extends Component {
  state = {
    salesType: 'all',
    currentTabKey: '',
    rangePickerValue: getTimeDistance('year'),
  };

  componentDidMount() {
    const { dispatch } = this.props;
    this.reqRef = requestAnimationFrame(() => {
      dispatch({
        type: 'chart/fetch',
      });
    });
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'chart/clear',
    });
    cancelAnimationFrame(this.reqRef);
    clearTimeout(this.timeoutId);
  }

  handleChangeSalesType = e => {
    this.setState({
      salesType: e.target.value,
    });
  };

  handleTabChange = key => {
    this.setState({
      currentTabKey: key,
    });
  };

  handleRangePickerChange = rangePickerValue => {
    const { dispatch } = this.props;
    this.setState({
      rangePickerValue,
    });

    dispatch({
      type: 'chart/fetchSalesData',
    });
  };

  selectDate = type => {
    const { dispatch } = this.props;
    this.setState({
      rangePickerValue: getTimeDistance(type),
    });

    dispatch({
      type: 'chart/fetchSalesData',
    });
  };

  isActive = type => {
    const { rangePickerValue } = this.state;
    const value = getTimeDistance(type);
    if (!rangePickerValue[0] || !rangePickerValue[1]) {
      return '';
    }
    if (
      rangePickerValue[0].isSame(value[0], 'day') &&
      rangePickerValue[1].isSame(value[1], 'day')
    ) {
      return styles.currentDate;
    }
    return '';
  };

  render() {
    const { rangePickerValue, salesType, currentTabKey } = this.state;
    const { chart, loading } = this.props;
    const {
      visitData,
      visitData2,
      salesData,
      searchData,
      offlineData,
      offlineChartData,
      salesTypeData,
      salesTypeDataOnline,
      salesTypeDataOffline,
    } = chart;
    let salesPieData;
    if (salesType === 'all') {
      salesPieData = salesTypeData;
    } else {
      salesPieData = salesType === 'online' ? salesTypeDataOnline : salesTypeDataOffline;
    }
    const menu = (
      <Menu>
        <Menu.Item>操作一</Menu.Item>
        <Menu.Item>操作二</Menu.Item>
      </Menu>
    );

    const dropdownGroup = (
      <span className={styles.iconGroup}>
        <Dropdown overlay={menu} placement="bottomRight">
          <Icon type="ellipsis" />
        </Dropdown>
      </span>
    );

    const activeKey = currentTabKey || (offlineData[0] && offlineData[0].name);

    return (
      <div>
      <Row gutter={24}>
          <Col xl={24} lg={24} md={24} sm={24} xs={24} style={{ marginBottom: 24 }}>
            <Card
              title={
                <FormattedMessage
                  id="app.monitor.trading-activity"
                  defaultMessage="Project"
                />
              }
              bordered={false}
            >
              <Row>
             
                <Col md={8} sm={12} xs={24}>
                 <img src="https://www.lennar.com/images/elevations/30855_eleC_lg.jpg?w=1200&h=650&as=1" />
                  <NumberInfo
                    subTitle={
                      <FormattedMessage
                        id="app.monitor.total-transactions"
                        defaultMessage="Total transactions today"
                      />
                    }
                   
                  />
                </Col>
                <Col md={8} sm={12} xs={24}>
                  <NumberInfo
                    subTitle={
                      <FormattedMessage
                        id="app.monitor.sales-target"
                        defaultMessage="Sales target completion rate"
                      />
                    }
                  />
                </Col>
                <Col md={8} sm={12} xs={24}>
                  <NumberInfo
                    subTitle={
                      <FormattedMessage
                        id="app.monitor.remaining-time"
                        defaultMessage="Remaining time of activity"
                      />
                    }
                    
                  />
                </Col>
               
              </Row>
              <div className={styles.mapChart}>
                <Tooltip
                  title={
                    <FormattedMessage
                      id="app.monitor.waiting-for-implementation"
                      defaultMessage="Waiting for implementation"
                    />
                  }
                >
                 
                </Tooltip>
              </div>
            </Card>
          </Col>
        
        </Row>

      {/*
        <Suspense fallback={<PageLoading />}>
          <IntroduceRow loading={loading} visitData={visitData} />
        </Suspense>
        <Suspense fallback={null}>
                 <SalesCard
                   rangePickerValue={rangePickerValue}
                   salesData={salesData}
                   isActive={this.isActive}
                   handleRangePickerChange={this.handleRangePickerChange}
                   loading={loading}
                   selectDate={this.selectDate}
                 />
        </Suspense>*/}
       {/* <div className={styles.twoColLayout}>
                 <Row gutter={24}>
                   <Col xl={12} lg={24} md={24} sm={24} xs={24}>
                     <Suspense fallback={null}>
                       <TopSearch
                         loading={loading}
                         visitData2={visitData2}
                         selectDate={this.selectDate}
                         searchData={searchData}
                         dropdownGroup={dropdownGroup}
                       />
                     </Suspense>
                   </Col>
                   <Col xl={12} lg={24} md={24} sm={24} xs={24}>
                     <Suspense fallback={null}>
                       <ProportionSales
                         dropdownGroup={dropdownGroup}
                         salesType={salesType}
                         loading={loading}
                         salesPieData={salesPieData}
                         handleChangeSalesType={this.handleChangeSalesType}
                       />
                     </Suspense>
                   </Col>
                 </Row>
               </div>*/}
       {/* <Suspense fallback={null}>
                 <OfflineData
                   activeKey={activeKey}
                   loading={loading}
                   offlineData={offlineData}
                   offlineChartData={offlineChartData}
                   handleTabChange={this.handleTabChange}
                 />
               </Suspense>*/}
      </div>
    );
  }
}

export default Analysis;
