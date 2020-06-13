import React from 'react'
import { ResponsiveBar } from '@nivo/bar'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const MyResponsiveBar = (props) => (
    <ResponsiveBar
        data={props.data}
        keys={[ 'swift', 'email', 'bank-account', 'phone', 'ssn', 'passport', 'aba', 'dob', 'credit-card' ]}
        indexBy="data_source"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.7}
        colors={{ scheme: 'dark2' }}       
        borderColor={{ from: 'color', modifiers: [ [ 'darker', '1.4' ] ] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 3,
            tickRotation: 0,
            legend: '(Sensitive Info Type)',
            legendPosition: 'middle',
            legendOffset: 45
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '(Total Records)',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        enableLabel={false}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 54,
                translateY: 40,
                itemsSpacing: 0,
                itemWidth: 82,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 5,
                
            }
        ]}
        isInteractive={false}
        animate={false}
        motionStiffness={90}
        motionDamping={15}
    />
)

export default MyResponsiveBar