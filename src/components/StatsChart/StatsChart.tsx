import React, {useState, useEffect} from 'react';
import {BarChart, YAxis} from 'react-native-svg-charts';
import {IStat} from '../../interfaces/IPokemon';
import {View} from 'react-native';
import * as scale from 'd3-scale';

interface Props {
  stats: IStat[];
}

const StatsChart: React.FC<Props> = ({stats}) => {
  function formatData(unformatedData: IStat[]) {
    return unformatedData.map(stat => {
      return {
        value: stat.baseStat,
        label: stat.name,
      };
    });
  }

  const [data] = useState<any>(formatData(stats));

  return (
    data && (
      <View style={{flexDirection: 'row', height: 200, padding: 16, backgroundColor: 'ivory', borderRadius: 7}}>
        <YAxis
          data={data}
          yAccessor={({index}) => index}
          scale={scale.scaleBand}
          contentInset={{top: 10, bottom: 10}}
          spacing={0.2}
          svg={{
            fill: 'grey',
            fontSize: 10,
          }}
          formatLabel={(_, index) => data[index].label.toUpperCase()}
        />
        <BarChart
          style={{flex: 1, marginLeft: 8}}
          data={data}
          horizontal={true}
          yAccessor={({item}) => item.value}
          svg={{fill: 'silver'}}
          contentInset={{top: 10, bottom: 10}}
          spacing={0.2}
          gridMin={0}></BarChart>
        <YAxis
          style={{ paddingLeft: 16}}
          data={data}
          yAccessor={({index}) => index}
          scale={scale.scaleBand}
          contentInset={{top: 10, bottom: 10}}
          spacing={0.25}
          svg={{
            fill: 'grey',
            fontSize: 10,
          }}
          formatLabel={(_, index) => data[index].value}
        />
      </View>
    )
  );
};

export default StatsChart;
