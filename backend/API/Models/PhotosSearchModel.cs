using System.Text.Json.Serialization;

namespace API.Models;

public class PhotosSearchModel()
{
    [JsonPropertyName("photos")]
    public Photos? Photos { get; set; }

    [JsonPropertyName("stat")]
    public string? Status { get; set; }

    [JsonPropertyName("code")]
    public int? Code { get; set; } = 200;

    [JsonPropertyName("message")]
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public string? Message { get; set; }
}

public class Photos()
{
    [JsonPropertyName("photo")]
    public List<Photo>? Photo { get; set; }

    [JsonPropertyName("page")]
    public int Page { get; set; } = 1;

    [JsonPropertyName("perpage")]
    public int PerPage { get; set; } = 0;

    [JsonPropertyName("total")]
    public int Total { get; set; } = 0;
}

public class Photo()
{
    [JsonPropertyName("id")]
    public string? Id { get; set; }

    [JsonPropertyName("title")]
    public string? Title { get; set; }

    [JsonPropertyName("secret")]
    public string? Secret { get; set; }

    [JsonPropertyName("server")]
    public string? Server { get; set; }
}