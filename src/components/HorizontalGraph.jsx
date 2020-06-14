import React from 'react'

import { ResponsiveBar } from '@nivo/bar'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const HorizontalGraph = ({ data /* see data tab */ }) => (
    <ResponsiveBar
        data={data}
        keys={[ 'coverage-percentage' ]}
        indexBy="data_source"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.5}
        maxValue={1000}
        layout="horizontal"
        colors={{ scheme: 'blues' }}        
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 0,
            tickPadding: 5,
            tickRotation: 0,
            legend: '(Inspection Coverage (%) )',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 0,
            tickPadding: 5,
            tickRotation: 0,
            legend: '(Data Sources)',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        enableLabel={false}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        legends={[]}
        isInteractive={false}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
    />
)

export default HorizontalGraph