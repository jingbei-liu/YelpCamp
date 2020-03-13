var express         = require("express"),
    bodyParser      = require("body-parser"),
    expressSanitizer = require("express-sanitizer"),
    passport        = require("passport"),
    LocalStrategy   = require("passport-local"),
    mongoose        = require("mongoose"),
    app             = express(),
    methodOverride  = require("method-override"),
    flash           = require("connect-flash");

var Campground  = require("./models/campground"),
    Comment     = require('./models/comment'),
    User        = require("./models/user");
    
//REQUIRING ROUTES
var commentsRoutes      = require("./routes/comments"),
    campgroundRoutes    = require("./routes/campgrounds"),
    indexRoutes         = require("./routes/index"),
    authRoutes          = require("./routes/index");
var seedDB = require("./seeds"); 

app.use(require("express-session")({
    secret: "Rusky is the best",
    resave: false,
    saveUninitialized: false
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
   res.locals.currentUser = req.user;
   res.locals.error = req.flash("error");
   res.locals.success = req.flash("success");
   next();
});

mongoose.connect("mongodb://localhost:27017/yelp_camp", {useNewUrlParser: true, useUnifiedTopology: true});

app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public")); 
app.use(methodOverride("_method"));
// seedDB();

app.use("/", indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentsRoutes);



app.listen(process.env.PORT, process.env.IP, function(){
   console.log("yelp started"); 
});