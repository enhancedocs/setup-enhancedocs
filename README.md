# enhancedocs-github-action

The `enhancedocs/enhancedocs-github-action` action is minimal github action that sets up EnhanceDocs CLI in your GitHub Actions.

## Usage

```yaml
steps:
  - name: Checkout Repository
    uses: actions/checkout@v3

  - name: Install EnhanceDocs CLI
    uses: enhancedocs/enhancedocs-github-action@0.0.3
    with:
      # More about EnhanceDocs Secret API Key: https://docs.enhancedocs.com/security/api-keys
      api-key: ${{ secrets.ENHANCEDOCS_API_KEY }}
  
  - name: Build Docs
    run: enhancedocs build docs

  - name: Pushish Docs
    run: enhancedocs publish <project_id>
```
