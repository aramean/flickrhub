using System.Text.Json.Serialization;

namespace API.Models;

public class PhotosSearchModel()
{
    [JsonPropertyName("photos")]
    public Photos Photos { get; init; } = new();

    [JsonPropertyName("stat")]
    public string? Status { get; init; }

    [JsonPropertyName("code")]
    public int Code { get; init; } = 200;

    [JsonPropertyName("message")]
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public string? Message { get; init; }
}

public class Photos()
{
    [JsonPropertyName("photo")]
    public List<Photo> Photo { get; init; } = [];

    [JsonPropertyName("page")]
    public int Page { get; init; } = 1;

    [JsonPropertyName("perpage")]
    public int PerPage { get; init; } = 0;

    [JsonPropertyName("total")]
    public int Total { get; init; } = 0;
}

public class Photo()
{
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    [JsonPropertyName("title")]
    public string? Title { get; init; }

    [JsonPropertyName("secret")]
    public string? Secret { get; init; }

    [JsonPropertyName("server")]
    public string? Server { get; init; }
}