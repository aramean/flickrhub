using System.Text.Json;
using API.Models;

namespace API.Services;

public class FlickrService(HttpClient httpClient, IConfiguration configuration)
{
    private readonly HttpClient _httpClient = httpClient;
    private readonly string? _baseUrl = configuration["FlickrApi:BaseUrl"];
    private const string ApiKey = "541bf49a73d4cf4455660c6431d4d6b8"; //Todo: Read from environment variable.
    private const string CommonParameters = $"&api_key={ApiKey}&format=json&nojsoncallback=1";

    public async Task<PhotosSearchModel> GetPhotosBySearchText(string searchText, int page)
    {
        var url = $"{_baseUrl}?method=flickr.photos.search&text={searchText}&page={page}&{CommonParameters}";

        // Send the request
        var request = await _httpClient.GetAsync(url);

        // Ensure HTTP request was successful. Stop if it fails.
        request.EnsureSuccessStatusCode();

        // Read JSON content from the body
        var response = await request.Content.ReadAsStringAsync();

        // Deserialize the JSON response into the model
        var result = JsonSerializer.Deserialize<PhotosSearchModel>(response) ?? new PhotosSearchModel();

        // Deserialize the response to a general result object
        //var result = JsonSerializer.Deserialize<object>(response);

        return result;
    }
}
