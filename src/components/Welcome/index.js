import React from 'react';
import { Card, Row, Col} from 'antd';
import './index.less';
import $ from 'jquery';
var G2 = require('g2');
/**
 * 展示欢迎界面
 */
class Welcome extends React.Component {

  componentDidMount(){
    var data = [{"month":"5","gender":"女性","count":101},{"month":"10","gender":"女性","count":120},{"month":"15","gender":"女性","count":150},{"month":"20","gender":"女性","count":167},{"month":"25","gender":"女性","count":175},{"month":"30","gender":"女性","count":175},{"month":"35","gender":"女性","count":173},{"month":"40","gender":"女性","count":170},{"month":"45","gender":"女性","count":170},{"month":"50","gender":"女性","count":163},{"month":"5","gender":"男性","count":104},{"month":"10","gender":"男性","count":130},{"month":"15","gender":"男性","count":165},{"month":"20","gender":"男性","count":178},{"month":"25","gender":"男性","count":185},{"month":"30","gender":"男性","count":183},{"month":"35","gender":"男性","count":182},{"month":"40","gender":"男性","count":180},{"month":"45","gender":"男性","count":182},{"month":"50","gender":"男性","count":177}];
    var data = [
      {
        "month":"1",
        "male":"20",
        "female":"5",
        "count":"25"
      },
      {
        "month":"2",
        "male":"30",
        "female":"5",
        "count":"35"
      },
      {
        "month":"3",
        "male":"40",
        "female":"5",
        "count":"45"
      },
      {
        "month":"4",
        "male":"50",
        "female":"5",
        "count":"55"
      },
      {
        "month":"6",
        "male":"70",
        "female":"5",
        "count":"75"
      },
      {
        "month":"8",
        "male":"90",
        "female":"5",
        "count":"95"
      },
      {
        "month":"10",
        "male":"20",
        "female":"5",
        "count":"25"
      },
    ]
    var chart = new G2.Chart({
      id : 'UserChats',
      width : 1000,
      height : 500
    });

    chart.source(data, {
      count: {
        min: 0,
        tickInterval: 50,
        alias: '注册数'
      },
      month:{
        alias:'月份'
      }
    });
    // chart.axis('male+female', false);
    chart.intervalDodge().position('month*count').color('gender', function(val) {
      if (val === 'male') {
        return '#64b5f6';
      } 
      return '#ff9999';
     }).size(25);
    // chart.intervalDodge().position('month*(male+female)').color('#ef6c00').shape('gender', function() {
    //   return 'tick'
    // }).size(8);
    chart.render();

    // chart.on('tooltipchange', function(ev) {
    //   var items = ev.items; // tooltip显示的项
    //   var femaleName = items[0].name;
    //   var femalecount = items[0].value;
    //   var femaleRange = (items[2].value).split('-');
    //   var femaleColor = items[0].color;
    //   var maleName = items[1].name;
    //   var malecount = items[1].value;
    //   var maleRange = (items[3].value).split('-');
    //   var maleColor = items[1].color;
    //   items.splice(0); // 清空

    //   items.push({
    //     title: null,
    //     name: femaleName,
    //     marker: true,
    //     color: femaleColor,
    //     value: femaleRange[0] + ' cm < ' + femalecount + ' cm < ' + femaleRange[1] + ' cm'
    //   });
    //   items.push({
    //     title: null,
    //     name: maleName,
    //     marker: true,
    //     color: maleColor,
    //     value: maleRange[0] + ' cm < ' + malecount + ' cm < ' + maleRange[1] + ' cm'
    //   });
    // });
  }

  render() {
    return (
      <div>
        <div id="UserChats"></div>
        <Row type="flex" justify="space-around" align="middle">
          <Col span={4}>
            <Card title="Card title">
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col span={4}>
            <Card title="Card title">
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col span={4}>
            <Card title="Card title">
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col span={4}>
            <Card title="Card title">
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col span={4}>
            <Card title="Card title">
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
        </Row>
        <Row>
          <Card title="Card title" style={{ width: 300 }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Row>
      </div>
    );
  }

}

export default Welcome;
