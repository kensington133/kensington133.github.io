require "jekyll-import";
    JekyllImport::Importers::WordPress.run({
      "dbname"   => "heybensh_3vgsy",
      "user"     => "heybensh_3vgsy",
      "password" => "teresa169",
      "host"     => "10.168.1.54",
      "prefix"   => "wp_",
      "clean_entities" => true,
      "comments"       => true,
      "categories"     => true,
      "tags"           => true,
      "more_excerpt"   => true,
      "more_anchor"    => true,
      "status"         => ["publish"]
    });