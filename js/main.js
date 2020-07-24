$(document).ready(function() {
	$('#pagepiling').pagepiling({
        sectionsColor: ['#BDCFF2', '#D0DFF2', '#D8EBF2', '#B6E7F2', '#BDF2D0'],
        navigation: {
            'textColor': '#fff',
            'bulletsColor': '#fff',
            'position': 'right',
            'tooltips': ['Home', 'Portfolio Item 1', 'Portfolio Item 2', 'Portfolio Item 3', 'Learn More']
        },
        loopBottom: 'true'
    });
});