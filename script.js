const ctx = document.getElementById('studentChart').getContext('2d');
const studentChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            label: 'Student Scores',
            data: [],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                max: 100
            }
        }
    }
});

document.getElementById('addData').addEventListener('click', () => {
    const studentName = document.getElementById('studentName').value;
    const studentScore = document.getElementById('studentScore').value;

    if (studentName && studentScore) {
        studentChart.data.labels.push(studentName);
        studentChart.data.datasets[0].data.push(studentScore);
        studentChart.update();

        // Clear input fields
        document.getElementById('studentName').value = '';
        document.getElementById('studentScore').value = '';
    } else {
        alert('Please enter both a name and a score.');
    }
});
