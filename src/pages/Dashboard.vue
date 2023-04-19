
<template>
    <div style="display: flex;">
        <div style="width: 500px;">
            <h4>Hourly sales :- </h4>
            <Bar :options="chartOptions" :data="chartData1" />
        </div>
        <div style="width: 500px;">
            <h4>Daily sales :- </h4>
            <Bar :options="chartOptions" :data="chartData2" />
        </div>
    </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
export default {
    name: 'Dashboard-',
    data() {
        return {
            chartData1: {
                labels: ["12am", "3pm", "6pm", "9pm", "12pm", "3am", "6am", "9am"],
                datasets: [{
                    data: [230, 750, 450, 300, 280, 240, 200, 190],
                    backgroundColor: 'gray',
                    label: 'Unites',
                }
                ]
            },
            chartData2: {
                labels: ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'],
                datasets: [{
                    data: [30, 60, 77, 65, 70, 54, 90],
                    backgroundColor: 'green',
                    label: 'Unites',
                }
                ]
            },
            chartOptions: {
                responsive: true
            }
        }
    },
    components: { Bar }
}
</script>