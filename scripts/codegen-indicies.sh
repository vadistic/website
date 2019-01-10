CODEGEN_DIR=generated

# find all codegen generated files and create index.ts for them
find src -name $CODEGEN_DIR -not -path "*/node_modules/*" -type d |
	xargs -I _dir sh -c \
		"
  rm -f _dir/index.ts;

  find _dir -name '*.ts' -not -name index.ts | \
  xargs -I _filepath basename _filepath .ts | \
  xargs -I _filename echo 'export * from \"./_filename\"' >> _dir/index.ts;

  xargs -I _ sort -o _dir/index.ts _dir/index.ts;
  "

# replace quotes (coz cannot escape quotes in sh -c above...)
find . -name $CODEGEN_DIR -not -path "*/node_modules/*" -type d |
	xargs -I _dir sed -i "s/\"/'/g" _dir/index.ts
echo 'Index files for apollo codegen generated'
