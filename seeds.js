var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require('./models/comment');

var data = [
    {
        name: "Cloud", 
        image: "https://images.squarespace-cdn.com/content/v1/574f0825859fd01f18ec55cc/1540325315332-E3QKCFEHYOUF0QG8FCN3/ke17ZwdGBToddI8pDm48kFWxnDtCdRm2WA9rXcwtIYR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UcTSrQkGwCGRqSxozz07hWZrYGYYH8sg4qn8Lpf9k1pYMHPsat2_S1jaQY3SwdyaXg/NFP_Campground_A80U1788.jpg", 
        description: "with sun light"
    },
    {
        name: "smoke", 
        image: "https://campone.com/wp-content/uploads/2017/12/Ponderosa-Campground-With-Tent-and-Fire.jpg", 
        description: "with smoe"
    },
    {
        name: "sunlight", 
        image: "https://parks.snco.us/ImageRepository/Path?filePath=%2F00000000-0000-0000-0000-000000000000%5C151%2FSunset+at+Lake+Shawnee+Campground+sm.jpg", 
        description: "with good sun"
    }
    ]

function seedDB(){
    Campground.remove({}, function(err){
        if (err){
            console.log(err);
        }
        console.log("removed campground");
        
        // data.forEach(function(seed){
        //     Campground.create(seed, function(err, campground){
        //         if (err){
        //             console.log(err);
        //         }else{
        //             console.log("added");
        //             Comment.create(
        //                 {
        //                     text : "this place is great",
        //                     author: "jingjignjingjingjin"
                            
        //                 }, function(err, comment){
        //                     if (err){
        //                         console.log(err);
        //                     }else{
        //                         campground.comments.push(comment);
        //                         campground.save();
        //                         console.log("created new comment");
        //                     }
        //                 });
        //         }
        //     })
        // })
    });
    

    
}
module.exports = seedDB;


