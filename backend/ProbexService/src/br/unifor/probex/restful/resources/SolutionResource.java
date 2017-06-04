package br.unifor.probex.restful.resources;

import br.unifor.probex.business.SolutionBORemote;
import br.unifor.probex.dto.SolutionDTO;
import br.unifor.probex.entity.Solution;

import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.ws.rs.*;
import java.util.ArrayList;
import java.util.List;

@Stateless
@Path("/solutions")
public class SolutionResource {

    @EJB
    private SolutionBORemote solutionBO;

    @Path("{id}")
    @GET
    @Produces("application/json")
    public SolutionDTO findSolutionById(@PathParam("id") Long id) {
        return SolutionDTO.fromSolution(solutionBO.findSolutionById(id));
    }

    @GET
    @Produces("application/json")
    public List<SolutionDTO> listSolutions(@QueryParam("q") int quantity) {
        List<SolutionDTO> dtos = new ArrayList<SolutionDTO>();
        for (Solution s : solutionBO.listSolutions(quantity)) {
            SolutionDTO dto = SolutionDTO.fromSolution(s);
            dtos.add(dto);
        }
        return dtos;
    }

    @POST
    @Consumes("application/json")
    @Produces("text/plain")
    public String addSolution(Solution solution) {
        return solutionBO.addSolution(solution);
    }

    @PUT
    @Consumes("application/json")
    @Produces("text/plain")
    public String updateSolution(Solution solution) {
        return solutionBO.updateSolution(solution);
    }

    @Path("{id}")
    @DELETE
    @Produces("text/plain")
    public String removeSolution(@PathParam("id") Long id) {
        return solutionBO.removeSolution(id);
    }

}