using Scalar.AspNetCore;
using API.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container
builder.Services.AddControllers();
builder.Services.AddOpenApi();

// Add HttpClient service to FlickrService.
builder.Services.AddHttpClient<FlickrService>();

// Bind the configuration (appsettings.json)
builder.Services.AddSingleton<IConfiguration>(builder.Configuration);

// Ensures all routes are in lowercase
builder.Services.AddRouting(options => options.LowercaseUrls = true);

// Enable CORS (Security feature).
builder.Services.AddCors(options => options.AddDefaultPolicy(policy =>
{
    policy.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
}));

var app = builder.Build();

if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    app.UseHsts();
}
else
{
    app.MapOpenApi();
    app.MapScalarApiReference();
}

// Redirect HTTP to HTTPS
app.UseHttpsRedirection();

// Enable routing for controllers
app.UseRouting();

// Apply the CORS policy before using any endpoints
app.UseCors();

// Configure the endpoints middleware
app.UseEndpoints(endpoints =>
{
    _ = endpoints.MapControllers();
});

app.Run();