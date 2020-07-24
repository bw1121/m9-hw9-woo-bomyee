$(document).ready(function() {
	$('#pagepiling').pagepiling({
        sectionsColor: ['#BDCFF2', '#ffe8f1', '#ffecb1', '#d6c9e8', '#BDCFF2'],
        navigation: {
            'textColor': '#fff',
            'bulletsColor': '#fff',
            'position': 'right',
            'tooltips': ['Home', 'Portfolio Item 1', 'Portfolio Item 2', 'Portfolio Item 3', 'Learn More']
        },
        loopBottom: 'true'
    });
});