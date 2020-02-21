using Microsoft.AspNetCore.Http;

namespace Application.Photos
{
    public interface IPhotoAccessor
    {
         PhotoUploadResult AddPhoto(IFormFile file);
         string DeletePhoto(string publicId);
    }
}