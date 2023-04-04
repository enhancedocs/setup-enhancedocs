# enhancedocs-github-action

The `enhancedocs/enhancedocs-github-action` action is minimal github action that sets up EnhanceDocs CLI in your GitHub Actions.

## Usage

```yaml
steps:
  - name: Checkout Repository
    uses: actions/checkout@v3

  - name: Install EnhanceDocs CLI
    uses: enhancedocs/enhancedocs-github-action@0.1.0
    with:
      # More about EnhanceDocs Secret API Key: https://docs.enhancedocs.com/security/api-keys
      api-key: ${{ secrets.ENHANCEDOCS_API_KEY }}
      # https://www.npmjs.com/package/enhancedocs version. (Not required); Defaults to `latest` if not provided
      cli-version: 0.4.0
  
  - name: Build Docs
    run: enhancedocs build docs

  - name: Pushish Docs
    run: enhancedocs publish <project_id>
```
