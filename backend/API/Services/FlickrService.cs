using System.Text.Json;
using API.Models;

namespace API.Services;

public class FlickrService(HttpClient httpClient, IConfiguration configuration)
{
  private readonly HttpClient _httpClient = httpClient;
    private readonly string _baseUrl = configuration["FlickrApi:BaseUrl"]
        ?? throw new Exception("FlickrApi:BaseUrl is missing in configuration.");
    private readonly string _apiKey = Environment.GetEnvironmentVariable("FLICKR_API_KEY") ?? configuration["ApiKey"]
        ?? throw new Exception("API key is missing.");

    private string CommonParameters => $"&api_key={_apiKey}&format=json&nojsoncallback=1";

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
