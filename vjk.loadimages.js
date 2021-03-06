/*
	* FUNCTION DATE: 03-10-2018
	* WRITTEN BY: VIJAYENDRA K
	* PURPOSE: TO DISPLAY IMAGES ON WEB-PAGE BY REFERING REMOTE/EXTERNAL XML FILE
*/

function LoadImages(path){
	var i=0;
	 $.get(path, function (d) {
                $(d).find('image').each(function () {
                    var $img = $(this);
                    var html = '';

                    if (i == 0) {
                        html = '<div class="carousel-item active">';
                        html += ' <div class="view">';
                        html += '<img src=\'' + $img.find('url').text() + '\'' + ' alt=\'' + $img.find('altdescription').text() + '\' style="width: 100%; height: 500px !important;"/>';
                        html += '<div class="mask rgba-black-light"></div>';
                        html += '</div>';
                        html += '<div class="carousel-caption">';
                        html += '<h3 class="h3-responsive">' + $img.find('description').text() + '</h3>';
                        html += '<p>' + $img.find('title').text() + '</p>';
                        html += '</div></div>';
                    }
                    else {
                        html = '<div class="carousel-item">';
                        html += ' <div class="view">';
                        html += '<img src=\'' + $img.find('url').text() + '\'' + ' alt=\'' + $img.find('altdescription').text() + '\' style="width: 100%; height: 500px !important;"/>';
                        html += '<div class="mask rgba-black-light"></div>';
                        html += '</div>';
                        html += '<div class="carousel-caption">';
                        html += '<h3 class="h3-responsive">' + $img.find('description').text() + '</h3>';
                        html += '<p>' + $img.find('title').text() + '</p>';
                        html += '</div></div>';
                    }
                    i++;
                    $("#ImgRoler").append(html);

                    var html2 = '';
                    var $cntrl = $('#OlIndicators');
                    if (i == 0) {
                        html2 += '<li data-target="#carousel-example-2" data-slide-to=\"' + i + '\" class="active"></li>';
                    } else {
                        html2 += '<li data-target="#carousel-example-2" data-slide-to=\"' + i + '\"></li>';
                    }
                    $cntrl.append($(html2));
                });
            });
}