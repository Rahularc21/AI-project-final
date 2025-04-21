# Create directories if they don't exist
New-Item -ItemType Directory -Force -Path "public\images\artworks\impressionism"
New-Item -ItemType Directory -Force -Path "public\images\fallbacks"

# Function to download image
function Download-Image {
    param (
        [string]$Url,
        [string]$OutFile
    )
    try {
        Write-Host "Downloading $Url to $OutFile"
        $webClient = New-Object System.Net.WebClient
        $webClient.DownloadFile($Url, $OutFile)
        Write-Host "Successfully downloaded to $OutFile"
    }
    catch {
        Write-Host "Failed to download $Url : $_"
    }
}

# Download Impressionism artworks
Download-Image -Url "https://www.claude-monet.com/images/paintings/water-lilies-3.jpg" -OutFile "public\images\artworks\impressionism\water-lilies.jpg"
Download-Image -Url "https://www.claude-monet.com/images/paintings/impression-sunrise.jpg" -OutFile "public\images\artworks\impressionism\impression-sunrise.jpg"
Download-Image -Url "https://www.renoir.net/images/paintings/moulin-de-la-galette.jpg" -OutFile "public\images\artworks\impressionism\dance-moulin.jpg"
Download-Image -Url "https://www.renoir.net/images/paintings/luncheon-of-the-boating-party.jpg" -OutFile "public\images\artworks\impressionism\luncheon-boating.jpg"

# Download fallback images
Download-Image -Url "https://www.claude-monet.com/images/paintings/water-lilies-1.jpg" -OutFile "public\images\fallbacks\impressionism-fallback.jpg"
Download-Image -Url "https://www.vangoghgallery.com/img/starry_night_full.jpg" -OutFile "public\images\fallbacks\post-impressionism-fallback.jpg"
Download-Image -Url "https://www.pablopicasso.org/images/paintings/les-demoiselles-d-avignon.jpg" -OutFile "public\images\fallbacks\cubism-fallback.jpg"
Download-Image -Url "https://www.dalipaintings.com/images/paintings/the-persistence-of-memory.jpg" -OutFile "public\images\fallbacks\surrealism-fallback.jpg"
Download-Image -Url "https://www.renaissance-art.org/images/Birth-of-Venus.jpg" -OutFile "public\images\fallbacks\renaissance-fallback.jpg"
Download-Image -Url "https://www.wassilykandinsky.net/images/works/370.jpg" -OutFile "public\images\fallbacks\modern-art-fallback.jpg"
Download-Image -Url "https://www.claude-monet.com/images/paintings/water-lilies-2.jpg" -OutFile "public\images\fallbacks\default-fallback.jpg"

Write-Host "Image download process completed!" 