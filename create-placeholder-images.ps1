# Create directories if they don't exist
New-Item -ItemType Directory -Force -Path "public\images\artworks\impressionism"
New-Item -ItemType Directory -Force -Path "public\images\fallbacks"

# Function to create a colored placeholder image with text
function Create-PlaceholderImage {
    param (
        [string]$Text,
        [string]$OutFile,
        [string]$BackgroundColor = "#F0F0F0",
        [string]$TextColor = "#333333"
    )
    
    $html = @"
    <svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="$BackgroundColor"/>
        <text x="50%" y="50%" font-family="Arial" font-size="24" fill="$TextColor" text-anchor="middle">$Text</text>
    </svg>
"@
    
    $bytes = [System.Text.Encoding]::UTF8.GetBytes($html)
    [System.IO.File]::WriteAllBytes($OutFile, $bytes)
    Write-Host "Created placeholder image: $OutFile"
}

# Create Impressionism artworks placeholders
Create-PlaceholderImage -Text "Water Lilies by Claude Monet (1919)" -OutFile "public\images\artworks\impressionism\water-lilies.jpg" -BackgroundColor "#E6F3FF"
Create-PlaceholderImage -Text "Impression, Sunrise by Claude Monet (1872)" -OutFile "public\images\artworks\impressionism\impression-sunrise.jpg" -BackgroundColor "#FFE6CC"
Create-PlaceholderImage -Text "Dance at Le Moulin de la Galette by Renoir (1876)" -OutFile "public\images\artworks\impressionism\dance-moulin.jpg" -BackgroundColor "#E6FFE6"
Create-PlaceholderImage -Text "Luncheon of the Boating Party by Renoir (1881)" -OutFile "public\images\artworks\impressionism\luncheon-boating.jpg" -BackgroundColor "#FFE6E6"

# Create fallback images
Create-PlaceholderImage -Text "Impressionism Art" -OutFile "public\images\fallbacks\impressionism-fallback.jpg" -BackgroundColor "#CCE6FF"
Create-PlaceholderImage -Text "Post-Impressionism Art" -OutFile "public\images\fallbacks\post-impressionism-fallback.jpg" -BackgroundColor "#FFCCCC"
Create-PlaceholderImage -Text "Cubism Art" -OutFile "public\images\fallbacks\cubism-fallback.jpg" -BackgroundColor "#CCFFCC"
Create-PlaceholderImage -Text "Surrealism Art" -OutFile "public\images\fallbacks\surrealism-fallback.jpg" -BackgroundColor "#FFCCFF"
Create-PlaceholderImage -Text "Renaissance Art" -OutFile "public\images\fallbacks\renaissance-fallback.jpg" -BackgroundColor "#FFFFCC"
Create-PlaceholderImage -Text "Modern Art" -OutFile "public\images\fallbacks\modern-art-fallback.jpg" -BackgroundColor "#CCE6FF"
Create-PlaceholderImage -Text "Art Gallery" -OutFile "public\images\fallbacks\default-fallback.jpg" -BackgroundColor "#E6E6E6"

Write-Host "All placeholder images created successfully!" 