<template>
    <div>
        <Bar :data="chartData" :options="chartOptions"></Bar>
        <!-- <canvas id="myChart"></canvas> -->
    </div>
</template>
<script>
import { Bar } from 'vue-chartjs'
// import Chart from 'chart.js';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
export default {
    name: 'Chart',
    data() {
        return {
            type: 'line',
            labels: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
            ],
            data : {
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
  },
            chartData: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'My First Dataset',
                        data: [65, 59, 80, 81, 56, 55, 40],
                        fill: false,
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.1,
                    },
                ],
            },
            chartOptions: {
                responsive: true,
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true,
                            },
                        },
                    ],
                },
            },
        }
    },
    components: { Bar },
    methods: {


    },
    mounted() {
    }

}
</script>