import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesBars, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
    return _.round(_.sum(data)/data.length);
}

export default (props) => {
    return (
      <div>
          <Sparklines height={300} width={1800} data={props.data}>
              <SparklinesBars style={{ fill: props.color, fillOpacity: ".25" }} />
              <SparklinesReferenceLine type="avg" />
          </Sparklines>
          <div>Average: {average(props.data)}{props.units}</div>
      </div>
    );
}