# Backend Documentation

## Overview
This project is a backend service built with C# and .NET (9).

---

## Environment Setup

### Development
Start and work on the service in the development environment.

#### Set API key with user secrets
```
dotnet user-secrets set "ApiKey" "541bf49a73d4cf4455660c6431d4d6b8"
```
#### Run service
```
dotnet run --environment Development
```
#### Run service with hotreload
```
dotnet watch
```

#### Open API platform
Access the OpenAPI documentation for the service:
```
https://localhost:8081/scalar/
```

#### Generate SSL
```
dotnet dev-certs https --trust
```

### Production
#### Build service
Builds the app for production use to the ./publish directory.
```
dotnet publish --configuration Release --output ./publish
```
#### Run service
```
dotnet run --environment Production
```
#### Pass API key environment variable
```
FLICKR_API_KEY="your-api-key" dotnet run --environment Production
```

## Installed NuGet packages
```
dotnet add package Microsoft.AspNetCore.OpenApi
```
```
dotnet add package Scalar.AspNetCore
```

## Notes
 - API credentials are stored as variables in ```FlickService.cs``` and should be moved to environment variables.
 - AddCors is configured in in ```Program.cs``` to allow all origins (security risk).
 - Kestrel is listening to all ip-adresses in ```appsettings.json``` (Production) (security risk).
 - Flickr API is buggy and shows an incorrect total number of photos.
 - Flickr API does not seem to support sending the API key through the header.
 - No integrations test or unit test are included.