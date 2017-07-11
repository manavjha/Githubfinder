(function($) {
    $('#searchUser').on('keyup', function(e) {
        let username = e.target.value
        console.log(username);

        // get user details from github api
        $.ajax({
            url: 'https://api.github.com/users/' + username,
            data: {
                client_id: '32ad090e84df34b85a10',
                client_secret: '91a83af86e68557f8f9312248d9b206f05dcf71c'
            }
        }).done(function(user) {
            $.ajax({
                url: 'https://api.github.com/users/' + username + '/repos',
                data: {
                    client_id: '32ad090e84df34b85a10',
                    client_secret: '91a83af86e68557f8f9312248d9b206f05dcf71c',
                    per_page: 10
                }
            }).done(function(repos) {
                $.each(repos, function(index, repo) {
                    $('#repos').append(`
                    <div class="well">
                        <div class="row">
                            <div class="col-md-7">
                            <strong>${repo.name}</strong> ${repo.description}
                            </div>
                            <div class="col-md-3">
                                <span class="label label-primary">Forks:${repo.forks_count}</span>
                                <span class="label label-info">Watchers:${repo.watchers_count}</span>
                                <span class="label label-warning">Counts:${repo.stargazers_count}</span>
                            </div>
                            <div class="col-md-2">
                            <a href="${repo.html_url}" target="_blank" class="btn btn-default btn-block">Repo Page</a>
                            </div>
                        </div>
                    </div>
                    `);
                });
            });

            $('#profile').html(`
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">${user.name}</h3>
                </div>
                <div class="panel-body">
                   <div class="row">
                        <div class="col-md-3" ><img src="${user.avatar_url}"  class="thumbnail " style="width:100%;">
                            <a target="_blank" class="btn btn-primary btn-block" href="${user.html_url}">View Profile</a>
                        </div>
                  
                        <div class="col-md-9">
                                <span class="label label-primary" style="padding:5px;">Public Repos:${user.public_repos}</span>
                                <span class="label label-info" style="padding:5px;">Location:${user.location}</span>
                                <span class="label label-warning" style="padding:5px;">Followers:${user.followers}</span>
                                <span class="label label-danger" style="padding:5px;">Following:${user.following}</span>
                                <br><br>
                                <ul class="list-group">
                                <li class="list-group-item"><strong>Company:</strong> ${user.company}</li>
                                <li class="list-group-item"><strong>Website/Blog:</strong> ${user.blog}</li>
                                <li class="list-group-item"><strong>Location:</strong> ${user.location}</li>
                                <li class="list-group-item"><strong>Member Since:</strong> ${user.created_at}</li>
                                </ul>
                        </div>
                   </div>
                </div>
            </div>
              <h3 class="page-header">Latest Repos</h3>
              <div id="repos"></div>
            `)
        });

    });

}(jQuery));

// for checkbox experiments

var users = [];
$('input[class=check]').change(function() {
    if ($(this).is(':checked')) {

        var user = (this).value;
        users.push(user);
        console.log((this).value);
        console.log(users);
    } else {
        console.log('not checked');
    }
});

// closure check

/*function add(a) {
    return function(b) {
        return a + b;
    }
}
console.log("total will be :" + add(2)(5));*/

function add(a) {
    return function(b) {
        // return a + b; 
        return function(c) {
            return a + b + c
        }
    }
}

console.log("Final Total will be :" + add(2)(5)(3));

function check() {
    var users = [];
    $('input[class=check]').change(function() {
        if ($(this).is(':checked')) {

            var user = (this).value;
            users.push(user);
            console.log((this).value);
            console.log(users);
        } else {
            console.log('not checked');
        }
    });
}