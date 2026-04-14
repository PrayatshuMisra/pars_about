#!/bin/bash

# Replace all instances of font-heading with font-space-grotesk in components
find /vercel/share/v0-project/components -name "*.tsx" -type f -exec sed -i 's/font-heading/font-space-grotesk/g' {} +

echo "Font fixes applied successfully"
