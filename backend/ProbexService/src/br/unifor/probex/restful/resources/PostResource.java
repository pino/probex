package br.unifor.probex.restful.resources;

import java.awt.*;
import java.util.ArrayList;
import java.util.List;

import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import br.unifor.probex.business.PostBORemote;
import br.unifor.probex.dao.PostDAO;
import br.unifor.probex.dto.PostDetailedDTO;
import br.unifor.probex.dto.PostSimpleDTO;
import br.unifor.probex.dto.VoteDTO;
import br.unifor.probex.entity.Post;

@Stateless
@Path("/posts")
public class PostResource {

	@EJB
	private PostBORemote postBO;

	@Path("{id}")
	@GET
	@Produces("application/json")
	public PostDetailedDTO findPostById(@PathParam("id") Long id) {
		Post post = postBO.findPostById(id);
		PostDetailedDTO dto = PostDetailedDTO.fromPost(post);
		return dto;
	}

	@GET
	@Produces("application/json")
	public List<PostSimpleDTO> listPosts(@QueryParam("q") int quantity, @QueryParam("c") String criteria,
			@QueryParam("s") int start, @QueryParam("k") String keywords) {if (start < 0)
			start = 0;
		String orderBy = null;
		System.out.println("CRITERIA: " + criteria);
		System.out.println("QUANTITY: " + quantity);
		System.out.println("START: " + start);
		System.out.println("KEYWORDS: " + keywords);
		if (criteria != null && criteria.equals("popular")) {
			orderBy = PostDAO.POPULAR;
		} else {
			orderBy = PostDAO.LATEST;
		}
		List<Post> data;
		if (keywords != null && !"".equals(keywords)) {
			String[] keys = keywords.split(",");
			List<String> keyList = new ArrayList<String>();
			for (String key : keys) {
				keyList.add(key);
				System.out.println("adding key: " + key);
			}
			if (quantity > 0) {
				data = postBO.searchKeywords(keyList, orderBy, quantity + start);
			} else {
				data = postBO.searchKeywords(keyList, orderBy);
			}
		} else {
			if (quantity > 0) {
				data = postBO.listPosts(orderBy, quantity + start);
			} else {
				data = postBO.listPosts(orderBy);
			}
		}

		if (quantity > 0) {
			List<Post> temp = new ArrayList<Post>();
			for (int i = start; i < start + quantity; i++) {
				if (data.size() < i + 1) {
					break;
				}
				temp.add(data.get(i));
			}
			data = temp;
		}
		List<PostSimpleDTO> dtos = new ArrayList<PostSimpleDTO>();
		for (Post p : data) {
			dtos.add(PostSimpleDTO.fromPost(p));
		}
		return dtos;
	}

	@POST
	@Consumes("application/json")
	@Produces("application/json")
	public Post addPost(Post post)
	{
		Post inserted = postBO.addPost(post);
		inserted.setAuthor(null);
		return inserted;
	}

	@PUT
	@Consumes("application/json")
	@Produces("text/plain")
	public String updatePost(Post post) {
		return postBO.updatePost(post);
	}

	@Path("{id}")
	@DELETE
	@Produces("text/plain")
	public String removePost(@PathParam("id") Long id) {
		return postBO.removePost(id);
	}

	@Path("/vote")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.TEXT_PLAIN)
	public String voteOnPost(VoteDTO vote) {
		return postBO.voteOnPost(vote);
	}

}