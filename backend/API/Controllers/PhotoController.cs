using Microsoft.AspNetCore.Mvc;
using API.Services;

namespace API.Controllers;

[Route("api/[controller]")]
[ApiController]
public class PhotoController(FlickrService flickService) : ControllerBase
{
    // Assign the injected service instance to the field.
    private readonly FlickrService _flickrService = flickService;

    [HttpGet("search")]
    public async Task<IActionResult> SearchPhotos(string searchText, int page)
    {
        var result = await _flickrService.GetPhotosBySearchText(searchText, page);

        if (result.Status == "ok")
        {
            return Ok(result);
        }
        else
        {
            return BadRequest(new { status = result.Status, code = result.Code, message = result.Message });
        }
    }
}
