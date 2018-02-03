package hello.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.TableGenerator;

@Entity
public class Product {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id",length=50, unique = true, nullable = false, insertable = false, updatable = false)
	private Integer id;

	@Column(name = "product_id",length=50)
	private Integer productId;
	
	@Column(name = "product_name",length=50)
	private String productName;
	
	@Column(name = "product_code",length=50)
	private String productCode;
	
	@Column(name = "release_date")
	private String releaseDate;
	
	@Column(name = "price",length=50)
	private Float price;
	
	@Column(name = "star_rating")
	private Float star_rating;

	@Column(name = "description",length=50)
	private String description;
	
	@Column(name = "image_url")
	private String imageUrl;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}
	public Integer getProductId() {
		return productId;
	}
	public void setProductId(Integer productId) {
		this.productId = productId;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public String getProductCode() {
		return productCode;
	}
	public void setProductCode(String productCode) {
		this.productCode = productCode;
	}
	public String getReleaseDate() {
		return releaseDate;
	}
	public void setReleaseDate(String releaseDate) {
		this.releaseDate = releaseDate;
	}
	public Float getPrice() {
		return price;
	}
	public void setPrice(Float price) {
		this.price = price;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getImageUrl() {
		return imageUrl;
	}
	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}
	
	public Float getStar_rating() {
		return star_rating;
	}

	public void setStar_rating(Float star_rating) {
		this.star_rating = star_rating;
	}

	
}