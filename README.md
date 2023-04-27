# setup-enhancedocs

The `enhancedocs/setup-enhancedocs` action is minimal github action that sets up EnhanceDocs CLI in your GitHub Actions.

## Usage

```yaml
steps:
  - name: Checkout Repository
    uses: actions/checkout@v3

  - name: Install EnhanceDocs CLI
    uses: enhancedocs/setup-enhancedocs@v0.1.3
    with:
      # More about EnhanceDocs Secret API Key: https://docs.enhancedocs.com/security/api-keys
      api-key: ${{ secrets.ENHANCEDOCS_API_KEY }}
      # https://pypi.org/project/enhancedocs/#history version. (Not required); Defaults to `latest` if not provided
      cli-version: latest
  
  - name: Build Docs
    run: enhancedocs build <docs_path>

  - name: Pushish Docs
    run: enhancedocs push <project_id>
```
